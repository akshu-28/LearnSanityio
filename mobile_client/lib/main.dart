import 'dart:io';

import 'package:contacts/config.dart';
import 'package:contacts/ui/screens/registration.dart';
import 'package:flutter/material.dart';
import 'package:flutter_sanity/flutter_sanity.dart';
import 'package:flutter_sanity_image_url/flutter_sanity_image_url.dart';
import 'package:http/http.dart' as http;
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

final sanityClient = SanityClient(
    projectId: "os8rkoc3",
    dataset: "production",
    token:
        "skROuL5AKgvCL4T7imvHYgdIamfpg1YkzqJkbNMv0z9sKRuqvB1fYxXu2U9BxHWubEOHgwvd9HaUe8FN6lxt6YxF95VSfnhi7jJnkMQ7dhkKRWaKUlpJYD2l6pG5kqot9eURQfqIsbgELciRTn41yR9egsVgs1xc4B7WBcYL9tW1cOx1NsfN",
    useCdn: false);
ValueNotifier<String> filePath = ValueNotifier<String>('');

void main() async {
  runApp(const MyApp(Key("myapp")));
  WidgetsFlutterBinding.ensureInitialized();
}

class MyApp extends StatefulWidget {
  const MyApp(Key? key) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    currentTheme.addListener(() {
      setState(() {});
    });

    getLoginbanner();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      key: const Key("matapp"),
      title: 'Flutter Demo',
      themeMode: currentTheme.currentTheme(),
      darkTheme: ThemeData(
        textButtonTheme: TextButtonThemeData(
            style: TextButton.styleFrom(foregroundColor: Colors.black)),
        elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
                padding:
                    const EdgeInsets.symmetric(horizontal: 80, vertical: 10))),
        primaryColor: Colors.black,
      ),
      theme: ThemeData(
        textButtonTheme: TextButtonThemeData(
            style: TextButton.styleFrom(foregroundColor: Colors.black)),
        elevatedButtonTheme: ElevatedButtonThemeData(
            style: ElevatedButton.styleFrom(
                padding:
                    const EdgeInsets.symmetric(horizontal: 80, vertical: 10))),
        primaryColor: Colors.blue,
      ),
      debugShowCheckedModeBanner: false,
      home: const Registration(),
    );
  }

  final builder = ImageUrlBuilder(sanityClient);

  ImageUrlBuilder urlFor(asset) {
    return builder.image(asset);
  }

  var picture;
  getLoginbanner() async {
    WidgetsBinding.instance.addPostFrameCallback(
      (timeStamp) async {
        //  await getlocalloginbanner();

        // if (filePath.value == "") {
        await saveloginbanner("");
        final response = await sanityClient.fetch('*[_type == "loginui"]');

        var picture = SanityImage.fromJson(response[0]["loginbanner"]);
        setState(() {});
        print(urlFor(picture).size(200, 200).url());
        var imgRes =
            await http.get(Uri.parse(urlFor(picture).size(200, 200).url()));
        filePath = await _saveImage(imgRes.bodyBytes, picture);

        await saveloginbanner(filePath.value);
        await getlocalloginbanner();
        // }

        print("File saved ${filePath.value}");
      },
    );
  }

  Future<String> _getLocalPath() async {
    var directory = await getExternalStorageDirectory();
    return directory!.path;
  }

  _saveImage(List<int> imageBytes, var pictures) async {
    var localPath = await _getLocalPath();
    var fileName = urlFor(pictures).size(200, 200).url().split('/').last;
    filePath.value = '$localPath/$fileName';

    File file = File(filePath.value);
    await file.writeAsBytes(imageBytes);

    return filePath;
  }

  Future<void> saveloginbanner(String value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('loginfilePath', filePath.value);
  }

  Future<void> getlocalloginbanner() async {
    final prefs = await SharedPreferences.getInstance();

    filePath.value = prefs.getString('loginfilePath') ?? "";
    setState(() {});
  }
}

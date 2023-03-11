import 'dart:convert';

import 'package:contacts/config.dart';
import 'package:contacts/ui/screens/login_logic.dart';
import 'package:contacts/ui/screens/registration.dart';
import 'package:flutter/material.dart';
import 'package:flutter_sanity/flutter_sanity.dart';
import 'package:http/http.dart' as http;

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
  sendSanityRequest();
}

Future<void> sendSanityRequest() async {
  var query = Uri.encodeComponent('*[ _type == "watchlist" ]');
  //"https://os8rkoc3.api.sanity.io/v2021-10-21/data/query/production?query=$query"
  var url =
      "https://os8rkoc3.api.sanity.io/v2022-09-09/data/mutate/production?tag=sanity.studio.document.publish&returnIds=true&visibility=async";
  final response = await http.post(
    Uri.parse(url),
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
          'Bearer skROuL5AKgvCL4T7imvHYgdIamfpg1YkzqJkbNMv0z9sKRuqvB1fYxXu2U9BxHWubEOHgwvd9HaUe8FN6lxt6YxF95VSfnhi7jJnkMQ7dhkKRWaKUlpJYD2l6pG5kqot9eURQfqIsbgELciRTn41yR9egsVgs1xc4B7WBcYL9tW1cOx1NsfN',
    },
    body: jsonEncode({
      "mutations": [
        {
          "create": {
            "_type": "watchlist",
            "symbolName": "KVB",
            "cmpyName": "kVB bank",
            "ltp": "63354",
            "cp": "87.56",
            "change": "+67.5"
          }
        }
      ]
    }),
  );
  print(response.body);
  if (response.statusCode == 200) {
    print(response.body);
  } else {
    throw Exception('Failed to send Sanity request: ${response.statusCode}');
  }
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

    Loginlogic().getLoginbanner();
    setState(() {});
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
}

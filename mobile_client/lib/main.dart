import 'package:contacts/config.dart';
import 'package:contacts/ui/screens/binaryTree.dart';
import 'package:flutter/material.dart';
import 'package:flutter_sanity/flutter_sanity.dart';

void main() async {
  runApp(const MyApp(Key("myapp")));
  WidgetsFlutterBinding.ensureInitialized();

  final sanityClient = SanityClient(
    dataset: 'production',
    projectId: 'u65tray5',
  );

  final post ={
  'name': 'My First Post',
  'body': 'Hello, world!',
};

  final response =
      await sanityClient.fetch('*[_type == "pet"]');

  print(response);

  //await currentTheme.retrieveBooleanValue();
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
      home: const BinaryTree(),
      /*  home: BlocProvider(
          create: (context) => ContactsBloc()..add(FetchContacts()),
          child: const ContactList(),
        ) */
    );
  }
}

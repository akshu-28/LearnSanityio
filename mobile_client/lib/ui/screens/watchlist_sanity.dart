import 'package:flutter/material.dart';

class ContactList extends StatefulWidget {
  const ContactList({Key? key}) : super(key: key);

  @override
  State<ContactList> createState() => _ContactListState();
}

class _ContactListState extends State<ContactList> {
  @override
  void initState() {
    //5klxzjcj
    // os8rkoc3
    //https://os8rkoc3.api.sanity.io/v2021-06-07/data/query/production?query=*%5B%20_type%20%3D%3D%20%22post%22%20%5D
    var query = Uri.encodeComponent('*[ _type == "post" ]"');
    var url =
        'https://os8rkoc3.api.sanity.io/v2021-06-07/data/query/production?query=$query}';
    print(url);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView.builder(
        itemBuilder: (context, index) {
          return null;
        },
      ),
    );
  }
}

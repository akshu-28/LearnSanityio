import 'dart:io';

import 'package:contacts/main.dart';
import 'package:contacts/ui/screens/watchlist_sanity.dart';
import 'package:flutter/material.dart';
import 'package:flutter_sanity_image_url/flutter_sanity_image_url.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:http/http.dart' as http;
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

class Registration extends StatefulWidget {
  const Registration({Key? key}) : super(key: key);

  @override
  State<Registration> createState() => _RegistrationState();
}

class _RegistrationState extends State<Registration> {
  @override
  void initState() {
    getLoginbanner();
    super.initState();
  }

  final builder = ImageUrlBuilder(sanityClient);

  ImageUrlBuilder urlFor(asset) {
    return builder.image(asset);
  }

  var picture;
  getLoginbanner() async {
    WidgetsBinding.instance.addPostFrameCallback(
      (timeStamp) async {
        await getlocalloginbanner();

        if (filePath == "") {
          LoaderWidget().showLoader(context, text: "Loading");
          final response = await sanityClient.fetch('*[_type == "loginui"]');

          var picture = SanityImage.fromJson(response[0]["loginbanner"]);

          var imgRes =
              await http.get(Uri.parse(urlFor(picture).size(200, 200).url()));
          filePath = await _saveImage(imgRes.bodyBytes);

          await saveloginbanner(filePath);
          await getlocalloginbanner();
          LoaderWidget().showLoader(context, stopLoader: true);
        }
      },
    );
  }

  String filePath = "";
  _saveImage(List<int> imageBytes) async {
    var directory = await getExternalStorageDirectory();
    var localPath = directory!.path;
    var fileName = urlFor(picture).size(200, 200).url().split('/').last;
    filePath = '$localPath/$fileName';

    File file = File(filePath);
    await file.writeAsBytes(imageBytes);

    return filePath;
  }

  Future<void> saveloginbanner(String value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('loginfilePath', filePath);
  }

  Future<void> getlocalloginbanner() async {
    final prefs = await SharedPreferences.getInstance();

    filePath = prefs.getString('loginfilePath') ?? "";
    setState(() {});
  }

  initSanity(String username, String passwords) async {
    List response = await sanityClient.fetch(
        '*[_type == "user" && name == "$username" && password == "$passwords"]');
    if (response.isEmpty) {
      Fluttertoast.showToast(msg: "User Not found");
    } else {
      // ignore: use_build_context_synchronously
      Navigator.pushReplacement(
        context,
        MaterialPageRoute(builder: (context) => const Watchlist()),
      );
    }
  }

  final formKey = GlobalKey<FormState>();
  TextEditingController username = TextEditingController();
  TextEditingController password = TextEditingController();
  bool agree = false;
  @override
  Widget build(BuildContext context) {
    return Form(
      key: formKey,
      child: Scaffold(
          body: SizedBox(
        height: MediaQuery.of(context).size.height,
        child: Stack(
          children: [
            if (filePath != "")
              Container(
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: FileImage(File(filePath)),
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            /*  Image.network(
                urlFor(picture).size(200, 200).url(),
                height: MediaQuery.of(context).size.height,
                width: MediaQuery.of(context).size.width,
                fit: BoxFit.fill,
              ), */
            if (filePath != "")
              Center(
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 15, vertical: 40),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 25),
                        child: TextWidget(
                          "UserName",
                          color: Colors.white,
                          size: 15,
                        ),
                      ),
                      SizedBox(
                        // width: MediaQuery.of(context).size.width * 0.71,
                        child: TextFormField(
                          controller: username,
                          // autofocus: true,
                          validator: (value) {
                            if (value!.isEmpty) {
                              return "Please Enter username";
                            }
                            return null;
                          },
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          style: const TextStyle(
                            fontSize: 16,
                            color: Colors.white,
                            fontWeight: FontWeight.w400,
                          ),
                          decoration: InputDecoration(
                            contentPadding: const EdgeInsets.symmetric(
                                vertical: 0, horizontal: 10),
                            focusColor: Colors.white,
                            focusedErrorBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                  color: Colors.grey, width: 0.5),
                              borderRadius: BorderRadius.circular(5.0),
                            ),
                            errorBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                  color: Colors.grey, width: 0.5),
                              borderRadius: BorderRadius.circular(5.0),
                            ),
                            enabledBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                  color: Colors.grey, width: 0.5),
                              borderRadius: BorderRadius.circular(5.0),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                  color: Colors.grey, width: 0.5),
                              borderRadius: BorderRadius.circular(5.0),
                            ),
                          ),
                        ),
                      ),
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 25),
                        child: TextWidget(
                          "Password",
                          color: Colors.white,
                          size: 15,
                        ),
                      ),
                      SizedBox(
                        // width: MediaQuery.of(context).size.width * 0.71,
                        child: TextFormField(
                          controller: password,
                          // autofocus: true,
                          validator: (value) {
                            if (value!.isEmpty) {
                              return "Please Enter username";
                            }
                            return null;
                          },
                          autovalidateMode: AutovalidateMode.onUserInteraction,
                          style: const TextStyle(
                            fontSize: 16,
                            color: Colors.white,
                            fontWeight: FontWeight.w400,
                          ),
                          decoration: InputDecoration(
                            contentPadding: const EdgeInsets.symmetric(
                                vertical: 0, horizontal: 10),
                            focusColor: Colors.white,
                            focusedErrorBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                  color: Colors.grey, width: 0.5),
                              borderRadius: BorderRadius.circular(5.0),
                            ),
                            errorBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                  color: Colors.grey, width: 0.5),
                              borderRadius: BorderRadius.circular(5.0),
                            ),
                            enabledBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                  color: Colors.grey, width: 0.5),
                              borderRadius: BorderRadius.circular(5.0),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderSide: const BorderSide(
                                  color: Colors.grey, width: 0.5),
                              borderRadius: BorderRadius.circular(5.0),
                            ),
                          ),
                        ),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(vertical: 30),
                        alignment: Alignment.center,
                        child: TextButton(
                            style: TextButton.styleFrom(
                                backgroundColor:
                                    Theme.of(context).colorScheme.background),
                            onPressed: () {
                              if (formKey.currentState!.validate()) {
                                initSanity(username.text, password.text);
                              }
                            },
                            child: Container(
                              alignment: Alignment.center,
                              padding: const EdgeInsets.symmetric(vertical: 5),
                              width: MediaQuery.of(context).size.width * 0.85,
                              child: const TextWidget(
                                "Login",
                                color: Colors.purple,
                                size: 20,
                                fontweight: FontWeight.bold,
                              ),
                            )),
                      )
                    ],
                  ),
                ),
              ),
          ],
        ),
      )),
    );
  }
}

class TextWidget extends StatelessWidget {
  const TextWidget(this.name,
      {Key? key, this.color, this.size, this.fontweight})
      : super(key: key);

  final String name;
  final Color? color;
  final double? size;
  final FontWeight? fontweight;

  @override
  Widget build(BuildContext context) {
    return Text(
      name,
      style: TextStyle(
          color: color ?? Colors.black,
          fontSize: size ?? 15,
          fontWeight: fontweight ?? FontWeight.normal),
    );
  }
}

class LoaderWidget {
  void showLoader(BuildContext context,
      {String? text, bool stopLoader = false}) {
    stopLoader
        ? Navigator.pop(context)
        : showDialog(
            context: context,
            barrierDismissible: false,
            builder: (BuildContext context) {
              return WillPopScope(
                  onWillPop: () async => false,
                  child: AlertDialog(
                    shape: const RoundedRectangleBorder(
                        borderRadius: BorderRadius.all(Radius.circular(8.0))),
                    backgroundColor: Colors.white,
                    content: Row(
                      children: [
                        const Padding(
                          padding: EdgeInsets.only(right: 10.0),
                          child: CircularProgressIndicator(
                              strokeWidth: 4,
                              valueColor:
                                  AlwaysStoppedAnimation<Color>(Colors.black)),
                        ),
                        const SizedBox(
                          width: 10,
                        ),
                        Text(
                          text ?? "",
                          style: TextStyle(
                              color: Colors.black,
                              fontSize: const Size.fromHeight(19).height),
                        )
                      ],
                    ),
                  ));
            },
          );
  }
}

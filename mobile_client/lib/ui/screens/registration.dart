import 'dart:io';

import 'package:contacts/main.dart';
import 'package:contacts/ui/screens/watchlist_sanity.dart';
import 'package:flutter/material.dart';
import 'package:fluttertoast/fluttertoast.dart';

class Registration extends StatefulWidget {
  const Registration({Key? key}) : super(key: key);

  @override
  State<Registration> createState() => _RegistrationState();
}

class _RegistrationState extends State<Registration> {
  @override
  void initState() {
    super.initState();
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
            ValueListenableBuilder<String>(
                valueListenable: filePath,
                builder: (context, value, _) {
                  WidgetsBinding.instance.addPostFrameCallback(
                    (timeStamp) {
                      setState(() {});
                    },
                  );
                  return Container(
                    decoration: BoxDecoration(
                      image: DecorationImage(
                        image: FileImage(File(value)),
                        fit: BoxFit.cover,
                      ),
                    ),
                  );
                }),
            /*  Image.network(
                urlFor(picture).size(200, 200).url(),
                height: MediaQuery.of(context).size.height,
                width: MediaQuery.of(context).size.width,
                fit: BoxFit.fill,
              ), */
            if (filePath.value != "")
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

import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_sanity_image_url/flutter_sanity_image_url.dart';
import "package:http/http.dart" as http;
import 'package:path_provider/path_provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../main.dart';

class Loginlogic {
  static final builder = ImageUrlBuilder(sanityClient);

  static ImageUrlBuilder urlFor(asset) {
    return builder.image(asset);
  }

  getLoginbanner() async {
    WidgetsBinding.instance.addPostFrameCallback(
      (timeStamp) async {
        await getlocalloginbanner();

        // if (filePath.value == "") {
        await saveloginbanner("");
        final response = await sanityClient.fetch('*[_type == "loginui"]');

        var picture = SanityImage.fromJson(response[0]["loginbanner"]);

        var imgRes =
            await http.get(Uri.parse(urlFor(picture).size(200, 200).url()));
        filePath = await _saveImage(imgRes.bodyBytes, picture);

        await saveloginbanner(filePath.value);
        await getlocalloginbanner();

        print("File saved ${filePath.value}");
      },
    );
  }

  static Future<String> _getLocalPath() async {
    var directory = await getExternalStorageDirectory();
    return directory!.path;
  }

  static _saveImage(List<int> imageBytes, var pictures) async {
    var localPath = await _getLocalPath();
    var fileName = urlFor(pictures).size(200, 200).url().split('/').last;
    filePath.value = '$localPath/$fileName';

    File file = File(filePath.value);
    await file.writeAsBytes(imageBytes);

    return filePath;
  }

  static Future<void> saveloginbanner(String value) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('loginfilePath', filePath.value);
  }

  static Future<void> getlocalloginbanner() async {
    final prefs = await SharedPreferences.getInstance();

    filePath.value = prefs.getString('loginfilePath') ?? "";
  }
}

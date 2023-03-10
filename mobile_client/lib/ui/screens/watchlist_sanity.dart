import 'package:flutter/material.dart';
import 'package:flutter_sanity/flutter_sanity.dart';

class Watchlist extends StatefulWidget {
  const Watchlist({Key? key}) : super(key: key);

  @override
  State<Watchlist> createState() => _WatchlistState();
}

class _WatchlistState extends State<Watchlist> {
  List watchlist = [];
  var sanityClient = SanityClient(
      projectId: "os8rkoc3",
      dataset: "production",
      token:
          "skROuL5AKgvCL4T7imvHYgdIamfpg1YkzqJkbNMv0z9sKRuqvB1fYxXu2U9BxHWubEOHgwvd9HaUe8FN6lxt6YxF95VSfnhi7jJnkMQ7dhkKRWaKUlpJYD2l6pG5kqot9eURQfqIsbgELciRTn41yR9egsVgs1xc4B7WBcYL9tW1cOx1NsfN",
      useCdn: false);

  @override
  void initState() {
    initSanity();

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Padding(
          padding: const EdgeInsets.symmetric(vertical: 20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                "Watchlist",
                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 20),
              ),
              Expanded(
                child: RefreshIndicator(
                  onRefresh: () async {
                    initSanity();
                  },
                  child: ListView.builder(
                    padding: const EdgeInsets.symmetric(
                        horizontal: 10, vertical: 40),
                    itemCount: watchlist.length,
                    itemBuilder: (context, index) {
                      return Container(
                        decoration: BoxDecoration(
                            color: Colors.grey.shade200,
                            borderRadius:
                                const BorderRadius.all(Radius.circular(10))),
                        padding: const EdgeInsets.all(10),
                        margin: const EdgeInsets.symmetric(vertical: 5),
                        child: Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  watchlist[index]["symbolName"],
                                  style: const TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 20),
                                ),
                                Text(
                                  watchlist[index]["ltp"],
                                  style: const TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 16),
                                ),
                              ],
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top: 8.0),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Text(
                                    watchlist[index]["cmpyName"],
                                    style: const TextStyle(
                                        fontWeight: FontWeight.w400,
                                        fontSize: 16),
                                  ),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.end,
                                    children: [
                                      Text(
                                        watchlist[index]["change"],
                                        style: TextStyle(
                                            color: watchlist[index]["change"]
                                                    .contains("+")
                                                ? Colors.green
                                                : Colors.red),
                                      ),
                                      const SizedBox(
                                        width: 10,
                                      ),
                                      Text(
                                        watchlist[index]["cp"],
                                        style:
                                            const TextStyle(color: Colors.pink),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            )
                          ],
                        ),
                      );
                    },
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  initSanity() async {
    final response = await sanityClient.fetch('*[_type == "watchlist"]');

    watchlist = response;
    setState(() {});

    print(response);
  }
}

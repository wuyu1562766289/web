import 'package:flutter/material.dart';

class WXSubjectContent extends StatefulWidget {
  @override
  _WXSubjectContentState createState() => _WXSubjectContentState();
}

class _WXSubjectContentState extends State<WXSubjectContent> {
  bool isLike = false;

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Image.asset("assets/images/yz.jpg"),
        Positioned(
          // 设置为尽可能占据空间
          left: 0,
          right: 0,
          bottom: 0,
          child: Container(
//          padding: EdgeInsets.all(8),
            padding: EdgeInsets.symmetric(horizontal: 8),
            color: Color.fromARGB(150, 0, 0, 0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text("长得好看的小姐姐！", style: TextStyle(fontSize: 20, color: Colors.white)),
//              GestureDetector(child: Icon(Icons.favorite, color: Colors.white))
                IconButton(
                  icon: Icon(Icons.favorite, color: isLike ? Colors.red : Colors.white),
                  onPressed: () {
                    setState(() {
                      isLike = !isLike;
                    });
                  },
                )
              ],
            ),
          ),
        )
      ],
    );
  }
}

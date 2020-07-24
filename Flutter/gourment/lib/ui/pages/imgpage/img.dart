import 'package:flutter/material.dart';
import 'img_detail.dart';

class WXImgScreen extends StatelessWidget {
  static const String routeName = "/img";

  @override
  Widget build(BuildContext context) {
    var pixe = MediaQuery.of(context);
    var ratio = pixe.devicePixelRatio;
    var width = (pixe.size.width * ratio).toInt();
    var height = (pixe.size.height * ratio).toInt();

    final String sizeStr = "$width/$height";

    return Scaffold(
      appBar: AppBar(title: Text("美图欣赏")),
      body: Center(
        child: GridView(
          // 固定个数
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            crossAxisSpacing: 8,
            mainAxisSpacing: 8,
            // 宽高比
            childAspectRatio: 16/9
          ),
          children: List.generate(20, (index) {
            final _imageURL = "https://picsum.photos/$sizeStr?random=$index";

            return GestureDetector(
              onTap: () {
                Navigator.of(context).push(PageRouteBuilder(
                  pageBuilder: (ctx, animation1, animation2) {
                    return FadeTransition(
                      opacity: animation1,
                      child: WXImageDetail(_imageURL)
                    );
                  }
                ));
              },
              child: Hero(
                tag: _imageURL,
                child: Image.network(_imageURL, fit: BoxFit.cover),
              )
            );
          })
        )
      )
    );
  }
}


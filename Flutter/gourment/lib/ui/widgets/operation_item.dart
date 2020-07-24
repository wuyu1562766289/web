import 'package:flutter/material.dart';
import 'package:gourment/core/extension/int_extension.dart';

class WXOperationItem extends StatelessWidget {
  final Widget _icon;
  final String _title;
  final Color destColor;
  WXOperationItem(this._icon, this._title, {this.destColor = Colors.black});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 80.px,
//      color: Colors.red,
      padding: EdgeInsets.symmetric(vertical: 8.px),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          _icon,
          SizedBox(width: 3.px),
          Text(_title, style: TextStyle(color: destColor))
        ],
      ),
    );
  }
}

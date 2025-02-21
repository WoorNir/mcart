{"version":3,"file":"script.map.js","names":["BX","namespace","UI","DropdownMenu","options","this","container","items","autoHideSubMenu","prototype","init","querySelectorAll","i","length","item","id","link","button","submenu","querySelector","operativeItem","getAttribute","disableExpandByLink","push","classList","contains","submenuOpen","canBeActiveItem","activeItem","noticeItem","loadData","addItem","DropdownMenuItem","menu","resetItems","reset","resetSubItems","hideSubMenu","hideSubmenu","itemsMap","WeakMap","subItems","newBadge","counter","set","getItemByNode","node","Dom","hasClass","get","parentNode","isSubmenuExist","getToggleButton","appendChild","submenuVisibilityStateVisible","subItem","canBeActiveSubItem","activeSubItem","showSubmenu","setNewToggleButtonName","addEvents","addSubItem","activate","add","remove","setDefaultToggleButtonName","addNoticeIcon","children","getNoticeIcon","removeNoticeIcon","noticeIcon","document","createElement","className","style","height","getSubmenuHeight","subItemsHeight","getHeight","addEventListener","setActiveHandler","bind","showSubmenuHandler","e","preventDefault","stopPropagation","buttonContainer","innerHTML","Loc","getMessage","getNewItemBadge","itemBadgeNewContainer","getCounter","counterContainer","getAddItem","addItemContainer","setAddItemName","message","DropdownMenuSubItem","subMenu","offsetHeight"],"sources":["script.js"],"mappings":"CAAA,WACC,aAEAA,GAAGC,UAAU,SAEbD,GAAGE,GAAGC,aAAe,SAASC,GAE7BC,KAAKC,UAAYF,EAAQE,UACzBD,KAAKE,MAAQ,GACbF,KAAKG,gBAAkBJ,EAAQI,eAGhC,EAEAR,GAAGE,GAAGC,aAAaM,UAAY,CAE9BC,KAAM,WAEL,IAAIH,EAAQF,KAAKC,UAAUK,iBAAiB,2BAE5C,IAAI,IAAIC,EAAI,EAAGA,EAAIL,EAAMM,OAAQD,IACjC,CACC,IAAIE,EAAO,CAAC,EAEZA,EAAKC,GAAKH,EACVE,EAAKR,UAAY,KACjBQ,EAAKE,KAAO,KACZF,EAAKG,OAAS,KACdH,EAAKI,QAAU,KAEfJ,EAAKR,UAAYC,EAAMK,GACvBE,EAAKE,KAAOF,EAAKR,UAAUa,cAAc,2BACzCL,EAAKM,cAAgBN,EAAKE,KAAKK,aAAa,kBAAoB,IAChEP,EAAKQ,oBAAsBR,EAAKE,KAAKK,aAAa,+BAAiC,IAEnFhB,KAAKE,MAAMgB,KAAKT,GAEhB,GAAIA,EAAKR,UAAUkB,UAAUC,SAAS,iCACtC,CACCX,EAAKY,YAAc,IACpB,CAEA,GAAIZ,EAAKR,UAAUkB,UAAUC,SAAS,mCACtC,CACCX,EAAKa,gBAAkB,GACxB,MACK,GAAIb,EAAKR,UAAUkB,UAAUC,SAAS,mCAC3C,CACCX,EAAKa,gBAAkB,GACxB,CAEA,GAAIb,EAAKR,UAAUkB,UAAUC,SAAS,6BAA+BX,EAAKa,kBAAoB,IAC9F,CACCb,EAAKc,WAAa,IACnB,CAEA,GAAId,EAAKR,UAAUa,cAAc,kCACjC,CACCL,EAAKe,WAAa,IACnB,CACD,CAEAxB,KAAKyB,UACN,EAEAA,SAAU,WAET,IAAI,IAAIlB,EAAI,EAAGA,EAAIP,KAAKE,MAAMM,OAAQD,IACtC,CACCP,KAAK0B,QAAQ1B,KAAKE,MAAMK,GACzB,CACD,EAEAmB,QAAS,SAAS3B,GAEjB,IAAIU,EAAO,IAAId,GAAGE,GAAG8B,iBAAiB5B,GACtCU,EAAKmB,KAAO5B,KAEZA,KAAKE,MAAMH,EAAQW,IAAMD,CAC1B,EAEAoB,WAAY,WAEX,IAAI,IAAItB,EAAI,EAAGA,EAAIP,KAAKE,MAAMM,OAAQD,IACtC,CACC,GAAIP,KAAKE,MAAMK,GAAGgB,WAClB,CACCvB,KAAKE,MAAMK,GAAGuB,OACf,CACD,CACD,EAEAC,cAAe,WAEd,IAAI,IAAIxB,EAAI,EAAGA,EAAIP,KAAKE,MAAMM,OAAQD,IACtC,CACCP,KAAKE,MAAMK,GAAGwB,eACf,CACD,EAEAC,YAAa,WAEZ,IAAI,IAAIzB,EAAI,EAAGA,EAAIP,KAAKE,MAAMM,OAAQD,IACtC,CACC,GAAIP,KAAKE,MAAMK,GAAGc,YAClB,CACCrB,KAAKE,MAAMK,GAAG0B,aACf,CACD,CACD,GAGD,IAAIC,EAAW,IAAIC,QAEnBxC,GAAGE,GAAG8B,iBAAmB,SAAS5B,GAEjCC,KAAKC,UAAYF,EAAQE,UACzBD,KAAKW,KAAOZ,EAAQY,KACpBX,KAAKY,OAAS,KACdZ,KAAKuB,WAAaxB,EAAQwB,WAAaxB,EAAQwB,WAAa,KAC5DvB,KAAKsB,gBAAkBvB,EAAQuB,gBAAkBvB,EAAQuB,gBAAkB,KAC3EtB,KAAKwB,WAAazB,EAAQyB,WAAazB,EAAQyB,WAAa,KAC5DxB,KAAKe,cAAgBhB,EAAQgB,cAAgBhB,EAAQgB,cAAgB,KACrEf,KAAKa,QAAU,KACfb,KAAKoC,SAAW,GAChBpC,KAAKqB,YAActB,EAAQsB,YAActB,EAAQsB,YAAc,MAC/DrB,KAAKqC,SAAW,KAChBrC,KAAKsC,QAAU,KACftC,KAAK0B,QAAU,KACf1B,KAAKiB,oBAAsBlB,EAAQkB,oBAAsBlB,EAAQkB,oBAAsB,KAEvFjB,KAAKK,OACL6B,EAASK,IAAIvC,KAAKC,UAAWD,KAC9B,EAMAL,GAAGE,GAAG8B,iBAAiBa,cAAgB,SAASC,GAE/C,GAAI9C,GAAG+C,IAAIC,SAASF,EAAM,0BAC1B,CACC,OAAOP,EAASU,IAAIH,EAAKI,WAC1B,CAEA,OAAOX,EAASU,IAAIH,EACrB,EAEA9C,GAAGE,GAAG8B,iBAAiBvB,UAAY,CAClCC,KAAM,WAEL,GAAIL,KAAK8C,iBACT,CACC9C,KAAKa,QAAUb,KAAKC,UAAUa,cAAc,yBAC5Cd,KAAKY,OAASZ,KAAK+C,kBACnB/C,KAAKW,KAAKqC,YAAYhD,KAAKY,OAO5B,CAEA,IAAIwB,EAAWpC,KAAKC,UAAUK,iBAAiB,8BAC9C2C,EAAgC,MAEjC,IAAI,IAAI1C,EAAI,EAAGA,EAAI6B,EAAS5B,OAAQD,IACpC,CACC,IAAI2C,EAAU,CAAC,EAEfA,EAAQxC,GAAKH,EACb2C,EAAQjD,UAAYmC,EAAS7B,GAE7BP,KAAKoC,SAASlB,KAAKgC,GAEnB,GAAIA,EAAQjD,UAAUkB,UAAUC,SAAS,mCACzC,CACC8B,EAAQC,mBAAqB,GAC9B,MACK,GAAID,EAAQjD,UAAUkB,UAAUC,SAAS,mCAC9C,CACC8B,EAAQC,mBAAqB,GAC9B,CACA,GAAID,EAAQjD,UAAUkB,UAAUC,SAAS,gCAAkC8B,EAAQC,qBAAuB,IAC1G,CACCD,EAAQE,cAAgB,KACxBH,EAAgC,IACjC,CAcD,CAKAjD,KAAKyB,WAEL,GAAIzB,KAAK8C,mBACR9C,KAAKuB,aAAe,MAAQvB,KAAKe,gBAAkB,MACnDkC,IAAkC,MAAQjD,KAAKqB,aAEhD,CACCrB,KAAKqD,cACLrD,KAAKsD,wBACN,CAEAtD,KAAKyB,WACLzB,KAAKuD,WACN,EAEA9B,SAAU,WAET,IAAI,IAAIlB,EAAI,EAAGA,EAAIP,KAAKoC,SAAS5B,OAAQD,IACzC,CACCP,KAAKwD,WAAWxD,KAAKoC,SAAS7B,GAC/B,CACD,EAEAkD,SAAU,WAETzD,KAAKuB,WAAa,KAClBvB,KAAKC,UAAUkB,UAAUuC,IAAI,2BAC9B,EAEA5B,MAAO,WAEN9B,KAAKuB,WAAa,KAClBvB,KAAKC,UAAUkB,UAAUwC,OAAO,4BAChC3D,KAAK4D,4BACN,EAEAC,cAAe,WAEd7D,KAAKwB,WAAa,KAClB,IAAKxB,KAAKC,UAAUa,cAAc,kCAClC,CACCd,KAAKC,UAAU6D,SAAS,GAAGd,YAAYhD,KAAK+D,gBAC7C,CACD,EAEAC,iBAAkB,WAEjBhE,KAAKwB,WAAa,KAElB,GAAIxB,KAAKC,UAAUa,cAAc,kCACjC,CACCd,KAAKC,UAAUa,cAAc,kCAAkC6C,QAChE,CACD,EAEAI,cAAe,WAEd/D,KAAKiE,WAAaC,SAASC,cAAc,QACzCnE,KAAKiE,WAAWG,UAAY,gCAE5B,OAAOpE,KAAKiE,UACb,EAEAZ,YAAa,WAEZrD,KAAKqB,YAAc,KACnBrB,KAAKa,QAAQwD,MAAMC,OAAStE,KAAKuE,kBAClC,EAEAtC,YAAa,WAEZjC,KAAKqB,YAAc,MACnBrB,KAAKa,QAAQwD,MAAMC,OAAS,CAC7B,EAEAC,iBAAkB,WAEjB,IAAIC,EAAiB,EAErB,IAAI,IAAIjE,EAAI,EAAGA,EAAIP,KAAKoC,SAAS5B,OAAQD,IACzC,CACCiE,EAAiBA,GAAmBxE,KAAKoC,SAAS7B,GAAGkE,YAAc,EAAK,EACzE,CAEA,OAAOD,EAAiB,IACzB,EAEAjB,UAAW,WAEV,GAAIvD,KAAKsB,kBAAoB,IAC7B,CACCtB,KAAKW,KAAK+D,iBAAiB,QAAS1E,KAAK2E,iBAAiBC,KAAK5E,MAChE,CAEA,GAAIA,KAAKY,QAAUZ,KAAKiB,oBACxB,CACCjB,KAAKY,OAAO8D,iBAAiB,QAAS1E,KAAK6E,mBAAmBD,KAAK5E,MACpE,KAEA,CACCA,KAAKW,KAAK+D,iBAAiB,QAAS1E,KAAK6E,mBAAmBD,KAAK5E,MAClE,CACD,EAEA6E,mBAAoB,SAASC,GAE5B,GAAI9E,KAAK8C,iBACT,CACC,IAAK9C,KAAKqB,YACV,CACC,GAAIrB,KAAK4B,KAAKzB,gBACd,CACCH,KAAK4B,KAAKI,aACX,CACA,GAAIhC,KAAKsB,kBAAoB,IAC7B,CACCtB,KAAK4B,KAAKC,aACV7B,KAAKyD,UACN,CAEAzD,KAAKqD,cACLrD,KAAKsD,wBACN,KAEA,CACCtD,KAAKiC,cACLjC,KAAK4D,4BACN,CAEA5D,KAAK4B,KAAKG,gBACV+C,GAAKA,EAAEC,iBACPD,GAAKA,EAAEE,iBACR,KAEA,CACC,GAAIhF,KAAKW,KAAKQ,UAAUC,SAAS,0CACjC,CACCpB,KAAKW,KAAKQ,UAAUwC,OAAO,yCAC5B,CACA3D,KAAK4B,KAAKG,eACX,CACD,EAEA4C,iBAAkB,SAASG,GAE1B,GAAI9E,KAAKW,KAAKK,aAAa,kBAAoB,IAC/C,CACC,MACD,CACA,GAAIhB,KAAK4B,KAAKzB,gBACd,CACCH,KAAK4B,KAAKI,aACX,CACA,GAAIhC,KAAKsB,kBAAoB,IAC7B,CACCtB,KAAK4B,KAAKC,aACV7B,KAAKyD,UACN,CACAzD,KAAKW,KAAKQ,UAAUwC,OAAO,yCAC5B,EAEAb,eAAgB,WAEf,GAAI9C,KAAKC,UAAUa,cAAc,yBACjC,CACC,OAAO,IACR,CAEA,OAAO,KACR,EAEAiC,gBAAiB,WAEhB/C,KAAKiF,gBAAkBf,SAASC,cAAc,OAC9CnE,KAAKiF,gBAAgBb,UAAY,0BACjCpE,KAAK4D,6BAEL,OAAO5D,KAAKiF,eACb,EAEA3B,uBAAwB,WAEvB,GAAItD,KAAKiF,gBACT,CACCjF,KAAKiF,gBAAgBC,UAAYvF,GAAGwF,IAAIC,WAAW,iCACpD,CACD,EAEAxB,2BAA4B,WAE3B,GAAI5D,KAAKiF,gBACT,CACCjF,KAAKiF,gBAAgBC,UAAYvF,GAAGwF,IAAIC,WAAW,gCACpD,CACD,EAEAC,gBAAiB,WAEhBrF,KAAKsF,sBAAwBpB,SAASC,cAAc,OACpDnE,KAAKsF,sBAAsBlB,UAAY,yBAEvC,OAAOpE,KAAKsF,qBACb,EAEAC,WAAY,WAEXvF,KAAKwF,iBAAmBtB,SAASC,cAAc,QAC/CnE,KAAKwF,iBAAiBpB,UAAY,uBAElC,OAAOpE,KAAKwF,gBACb,EAEAC,WAAY,WAEXzF,KAAK0F,iBAAmBxB,SAASC,cAAc,KAC/CnE,KAAK0F,iBAAiBtB,UAAY,wBAClCpE,KAAK2F,iBAEL,OAAO3F,KAAK0F,gBACb,EAEAC,eAAgB,WAEf3F,KAAK0F,iBAAiBR,UAAYvF,GAAGiG,QAAQ,6BAC9C,EAEApC,WAAY,SAASzD,GAEpB,IAAIU,EAAO,IAAId,GAAGE,GAAGgG,oBAAoB9F,GACzCU,EAAKqF,QAAU9F,KAEfA,KAAKoC,SAASrC,EAAQW,IAAMD,CAC7B,EAEAsB,cAAe,WAEd,IAAI,IAAIxB,EAAI,EAAGA,EAAIP,KAAKoC,SAAS5B,OAAQD,IACzC,CACC,GAAIP,KAAKoC,SAAS7B,GAAG6C,cACrB,CACCpD,KAAKoC,SAAS7B,GAAGuB,OAClB,CACD,CACD,GAGDnC,GAAGE,GAAGgG,oBAAsB,SAAS9F,GAEpCC,KAAKC,UAAYF,EAAQE,UACzBD,KAAKU,GAAKX,EAAQW,GAClBV,KAAKmD,mBAAqBpD,EAAQoD,mBAAqBpD,EAAQoD,mBAAqB,KACpFnD,KAAKoD,cAAgBrD,EAAQqD,cAAgBrD,EAAQqD,cAAgB,KAErEpD,KAAK8F,QAAU,KAEf9F,KAAKK,MACN,EAEAV,GAAGE,GAAGgG,oBAAoBzF,UAAY,CACrCC,KAAM,WAELL,KAAKuD,WACN,EAEAE,SAAU,WAETzD,KAAKoD,cAAgB,KACrBpD,KAAKC,UAAUkB,UAAUuC,IAAI,8BAC9B,EAEA5B,MAAO,WAEN9B,KAAKoD,cAAgB,KACrBpD,KAAKC,UAAUkB,UAAUwC,OAAO,8BACjC,EAEAJ,UAAW,WAEVvD,KAAKC,UAAUyE,iBAAiB,QAAS,WACxC,GAAI1E,KAAKmD,qBAAuB,KAAOnD,KAAKoD,cAC5C,CACC,MACD,CACA,MAAMzC,EAAOX,KAAKC,UAAUa,cAAc,8BAE1C,GAAIH,EAAKK,aAAa,kBAAoB,IAC1C,CACC,IAAKhB,KAAKoD,gBAAkBpD,KAAKuB,WACjC,CACCvB,KAAK8F,QAAQlE,KAAKC,YACnB,CAEA7B,KAAK8F,QAAQlE,KAAKG,gBAClB/B,KAAK8F,QAAQ/D,gBACb/B,KAAKyD,UACN,CACD,EAAEmB,KAAK5E,MACR,EAEAyE,UAAW,WAEV,OAAOzE,KAAKC,UAAU8F,YACvB,EAED,EAhgBD","ignoreList":[]}
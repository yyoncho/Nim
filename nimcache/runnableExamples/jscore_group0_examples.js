/* Generated by the Nim Compiler v1.9.5 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555842 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555180 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555188 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555187 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555184 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555185 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
var NNI33555185 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555185.node = NNI33555185;
NTI33555187.base = NTI33555184;
NTI33555188.base = NTI33555184;
var NNI33555184 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555187, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555188, name: "up", sons: null}]};
NTI33555184.node = NNI33555184;
var NNI33555180 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555180.node = NNI33555180;
NTI33555184.base = NTI33555180;
NTI33555185.base = NTI33555184;
NTI134217741.base = NTI33555185;
NTI134217743.base = NTI134217741;
var NNI33555842 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555842.node = NNI33555842;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555185;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555185;
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
NTI134217745.base = NTI33555185;

function arrayConstr(len_33557337, value_33557338, typ_33557339) {
        var result = new Array(len_33557337);
    for (var i = 0; i < len_33557337; ++i) result[i] = nimCopy(null, value_33557338, typ_33557339);
    return result;
  

  
}

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557291, src_33557292, ti_33557293) {
  var result_33557302 = null;

    switch (ti_33557293.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557282(ti_33557293))) {
      result_33557302 = src_33557292;
      }
      else {
        result_33557302 = [src_33557292[0], src_33557292[1]];
      }
      
      break;
    case 19:
            if (dest_33557291 === null || dest_33557291 === undefined) {
        dest_33557291 = {};
      }
      else {
        for (var key in dest_33557291) { delete dest_33557291[key]; }
      }
      for (var key in src_33557292) { dest_33557291[key] = src_33557292[key]; }
      result_33557302 = dest_33557291;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557293.base == null))) {
      result_33557302 = nimCopy(dest_33557291, src_33557292, ti_33557293.base);
      }
      else {
      if ((ti_33557293.kind == 17)) {
      result_33557302 = (dest_33557291 === null || dest_33557291 === undefined) ? {m_type: ti_33557293} : dest_33557291;
      }
      else {
        result_33557302 = (dest_33557291 === null || dest_33557291 === undefined) ? {} : dest_33557291;
      }
      }
      nimCopyAux(result_33557302, src_33557292, ti_33557293.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557292)) { 
        if(dest_33557291 === null || dest_33557291 === undefined || dest_33557291.length != src_33557292.length) {
          dest_33557291 = new src_33557292.constructor(src_33557292);
        } else {
          dest_33557291.set(src_33557292, 0);
        }
        result_33557302 = dest_33557291;
      } else {
        if (src_33557292 === null) {
          result_33557302 = null;
        }
        else {
          if (dest_33557291 === null || dest_33557291 === undefined || dest_33557291.length != src_33557292.length) {
            dest_33557291 = new Array(src_33557292.length);
          }
          result_33557302 = dest_33557291;
          for (var i = 0; i < src_33557292.length; ++i) {
            result_33557302[i] = nimCopy(result_33557302[i], src_33557292[i], ti_33557293.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557292 === null) {
        result_33557302 = null;
      }
      else {
        if (dest_33557291 === null || dest_33557291 === undefined || dest_33557291.length != src_33557292.length) {
          dest_33557291 = new Array(src_33557292.length);
        }
        result_33557302 = dest_33557291;
        for (var i = 0; i < src_33557292.length; ++i) {
          result_33557302[i] = nimCopy(result_33557302[i], src_33557292[i], ti_33557293.base);
        }
      }
    
      break;
    case 28:
            if (src_33557292 !== null) {
        result_33557302 = src_33557292.slice(0);
      }
    
      break;
    default: 
      result_33557302 = src_33557292;
      break;
    }

  return result_33557302;

}

function mnewString(len_33557026) {
        return new Array(len_33557026);
  

  
}

function addInt(a_33557073, b_33557074) {
        var result = a_33557073 + b_33557074;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557347, a_33557348, b_33557349) {
  var result_33557350 = 0;

  BeforeRet: {
    if (((a_33557348 <= i_33557347) && (i_33557347 <= b_33557349))) {
    result_33557350 = i_33557347;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557350;

}

function chckIndx(i_33557342, a_33557343, b_33557344) {
  var result_33557345 = 0;

  BeforeRet: {
    if (((a_33557343 <= i_33557342) && (i_33557342 <= b_33557344))) {
    result_33557345 = i_33557342;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557342, a_33557343, b_33557344);
    }
    
  };

  return result_33557345;

}

function cstrToNimstr(c_33556921) {
      var ln = c_33556921.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556921.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556921.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556924) {
  var result_33556925 = null;

    var res_33556966 = newSeq_33556942((s_33556924).length);
    var i_33556967 = 0;
    var j_33556968 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556967 < (s_33556924).length)) break Label2;
          var c_33556969 = s_33556924[i_33556967];
          if ((c_33556969 < 128)) {
          res_33556966[j_33556968] = String.fromCharCode(c_33556969);
          i_33556967 += 1;
          }
          else {
            var helper_33556982 = newSeq_33556942(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556983 = c_33556969.toString(16);
                  if ((((code_33556983) == null ? 0 : (code_33556983).length) == 1)) {
                  helper_33556982.push("%0");;
                  }
                  else {
                  helper_33556982.push("%");;
                  }
                  
                  helper_33556982.push(code_33556983);;
                  i_33556967 += 1;
                  if ((((s_33556924).length <= i_33556967) || (s_33556924[i_33556967] < 128))) {
                  break Label3;
                  }
                  
                  c_33556969 = s_33556924[i_33556967];
                }
            };
++excHandler;
            try {
            res_33556966[j_33556968] = decodeURIComponent(helper_33556982.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556966[j_33556968] = helper_33556982.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556968 += 1;
        }
    };
    if (res_33556966.length < j_33556968) { for (var i = res_33556966.length ; i < j_33556968 ; ++i) res_33556966.push(null); }
               else { res_33556966.length = j_33556968; };
    result_33556925 = res_33556966.join("");

  return result_33556925;

}

function raiseException(e_33556676, ename_33556677) {
    e_33556676.name = ename_33556677;
    if ((excHandler == 0)) {
    unhandledException(e_33556676);
    }
    
    e_33556676.trace = nimCopy(null, rawWriteStackTrace_33556627(), NTI33554449);
    throw e_33556676;

  
}

function subInt(a_33557077, b_33557078) {
        var result = a_33557077 - b_33557078;
    checkOverflowInt(result);
    return result;
  

  
}

function makeNimstrLit(c_33556918) {
      var result = [];
  for (var i = 0; i < c_33556918.length; ++i) {
    result[i] = c_33556918.charCodeAt(i);
  }
  return result;
  

  
}
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function add_33556396(x_33556397, x_33556397_Idx, y_33556398) {
          if (x_33556397[x_33556397_Idx] === null) { x_33556397[x_33556397_Idx] = []; }
      var off = x_33556397[x_33556397_Idx].length;
      x_33556397[x_33556397_Idx].length += y_33556398.length;
      for (var i = 0; i < y_33556398.length; ++i) {
        x_33556397[x_33556397_Idx][off+i] = y_33556398.charCodeAt(i);
      }
    

  
}

function isFatPointer_33557282(ti_33557283) {
  var result_33557284 = false;

  BeforeRet: {
    result_33557284 = !((ConstSet1[ti_33557283.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557284;

}

function nimCopyAux(dest_33557295, src_33557296, n_33557297) {
    switch (n_33557297.kind) {
    case 0:
      break;
    case 1:
            dest_33557295[n_33557297.offset] = nimCopy(dest_33557295[n_33557297.offset], src_33557296[n_33557297.offset], n_33557297.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557297.sons.length; i++) {
      nimCopyAux(dest_33557295, src_33557296, n_33557297.sons[i]);
    }
    
      break;
    case 3:
            dest_33557295[n_33557297.offset] = nimCopy(dest_33557295[n_33557297.offset], src_33557296[n_33557297.offset], n_33557297.typ);
      for (var i = 0; i < n_33557297.sons.length; ++i) {
        nimCopyAux(dest_33557295, src_33557296, n_33557297.sons[i][1]);
      }
    
      break;
    }

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556835, a_33556836, b_33556837) {
    var Temporary1;

    if ((b_33556837 < a_33556836)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_369098760(i_33556835) || [],[32,110,111,116,32,105,110,32] || [],HEX24_369098760(a_33556836) || [],[32,46,46,32] || [],HEX24_369098760(b_33556837) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_301990090(result_301990092, result_301990092_Idx, x_301990093, start_301990094, n_301990095) {
    var Temporary1;

  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    F.filename = "digitsutils.nim";
    var old_301990096 = (result_301990092[result_301990092_Idx]).length;
    F.line = 44;
    if (result_301990092[result_301990092_Idx].length < (Temporary1 = chckRange(addInt(old_301990096, n_301990095), 0, 2147483647), Temporary1)) { for (var i = result_301990092[result_301990092_Idx].length; i < Temporary1; ++i) result_301990092[result_301990092_Idx].push(0); }
         else {result_301990092[result_301990092_Idx].length = Temporary1; };
    Label2: {
      F.line = 46;
      var iHEX60gensym4_301990110 = 0;
      F.line = 119;
      F.filename = "iterators_1.nim";
      var i_654311680 = 0;
      Label3: {
        F.line = 120;
          Label4: while (true) {
          if (!(i_654311680 < n_301990095)) break Label4;
            F.line = 49;
            F.filename = "digitsutils.nim";
            iHEX60gensym4_301990110 = i_654311680;
            F.line = 49;
            result_301990092[result_301990092_Idx][chckIndx(addInt(old_301990096, iHEX60gensym4_301990110), 0, (result_301990092[result_301990092_Idx]).length - 1)] = x_301990093.charCodeAt(chckIndx(addInt(start_301990094, iHEX60gensym4_301990110), 0, (x_301990093).length - 1));
            F.line = 122;
            F.filename = "iterators_1.nim";
            i_654311680 = addInt(i_654311680, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_301990086(result_301990088, result_301990088_Idx, x_301990089) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    F.filename = "digitsutils.nim";
    addChars_301990090(result_301990088, result_301990088_Idx, x_301990089, 0, ((x_301990089) == null ? 0 : (x_301990089).length));
  framePtr = F.prev;

  
}

function addInt_301990111(result_301990112, result_301990112_Idx, x_301990113) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 111;
    F.filename = "digitsutils.nim";
    addChars_301990086(result_301990112, result_301990112_Idx, ((x_301990113) + ""));
  framePtr = F.prev;

  
}

function addInt_301990129(result_301990130, result_301990130_Idx, x_301990131) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 115;
    F.filename = "digitsutils.nim";
    addInt_301990111(result_301990130, result_301990130_Idx, BigInt(x_301990131));
  framePtr = F.prev;

  
}

function HEX24_369098760(x_369098761) {
  var result_369098762 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    F.filename = "dollars.nim";
    addInt_301990129(result_369098762, 0, x_369098761);
  framePtr = F.prev;

  return result_369098762[0];

}

function auxWriteStackTrace_33556531(f_33556532) {
  var result_33556533 = [[]];

    var it_33556541 = f_33556532;
    var i_33556542 = 0;
    var total_33556543 = 0;
    var tempFrames_33556544 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555842);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556541 == null)) && (i_33556542 <= 63))) break Label2;
          tempFrames_33556544[i_33556542].Field0 = it_33556541.procname;
          tempFrames_33556544[i_33556542].Field1 = it_33556541.line;
          tempFrames_33556544[i_33556542].Field2 = it_33556541.filename;
          i_33556542 += 1;
          total_33556543 += 1;
          it_33556541 = it_33556541.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556541 == null))) break Label4;
          total_33556543 += 1;
          it_33556541 = it_33556541.prev;
        }
    };
    result_33556533[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556543 == i_33556542))) {
    result_33556533[0].push.apply(result_33556533[0], [40]);;
    result_33556533[0].push.apply(result_33556533[0], HEX24_369098760((total_33556543 - i_33556542)));;
    result_33556533[0].push.apply(result_33556533[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556577 = 0;
      var colontmp__654311672 = 0;
      colontmp__654311672 = (i_33556542 - 1);
      var res_654311674 = colontmp__654311672;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_654311674)) break Label7;
            j_33556577 = res_654311674;
            result_33556533[0].push.apply(result_33556533[0], cstrToNimstr(tempFrames_33556544[j_33556577].Field2));;
            if ((0 < tempFrames_33556544[j_33556577].Field1)) {
            result_33556533[0].push.apply(result_33556533[0], [40]);;
            addInt_301990129(result_33556533, 0, tempFrames_33556544[j_33556577].Field1);
            if (false) {
            result_33556533[0].push.apply(result_33556533[0], [44,32]);;
            addInt_301990129(result_33556533, 0, 0);
            }
            
            result_33556533[0].push.apply(result_33556533[0], [41]);;
            }
            
            result_33556533[0].push.apply(result_33556533[0], [32,97,116,32]);;
            add_33556396(result_33556533, 0, tempFrames_33556544[j_33556577].Field0);
            result_33556533[0].push.apply(result_33556533[0], [10]);;
            res_654311674 -= 1;
          }
      };
    };

  return result_33556533[0];

}

function rawWriteStackTrace_33556627() {
  var result_33556628 = [];

    if (!((framePtr == null))) {
    result_33556628 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556531(framePtr) || []), NTI33554449);
    }
    else {
      result_33556628 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556628;

}

function newSeq_33556942(len_33556944) {
  var result_33556945 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 623;
    F.filename = "system.nim";
    result_33556945 = new Array(len_33556944); for (var i = 0 ; i < len_33556944 ; ++i) { result_33556945[i] = null; }  framePtr = F.prev;

  return result_33556945;

}

function unhandledException(e_33556672) {
    var buf_33556673 = [[]];
    if (!(((e_33556672.message).length == 0))) {
    buf_33556673[0].push.apply(buf_33556673[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556673[0].push.apply(buf_33556673[0], e_33556672.message);;
    }
    else {
    buf_33556673[0].push.apply(buf_33556673[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556673[0].push.apply(buf_33556673[0], [32,91]);;
    add_33556396(buf_33556673, 0, e_33556672.name);
    buf_33556673[0].push.apply(buf_33556673[0], [93,10]);;
    buf_33556673[0].push.apply(buf_33556673[0], rawWriteStackTrace_33556627());;
    var cbuf_33556674 = toJSStr(buf_33556673[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556674);
  }
  else {
    throw cbuf_33556674;
  }
  

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33557071) {
        if (a_33557071 > 2147483647 || a_33557071 < -2147483648) raiseOverflow();
  

  
}

function HEX3DHEX3D_654311438(x_654311440, y_654311441) {
  var result_654311442 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: {
    F.line = 326;
    F.filename = "comparisons.nim";
    var sameObject_654311450 = false;
    F.line = 327;
    sameObject_654311450 = x_654311440 === y_654311441
    if (sameObject_654311450) {
    F.line = 328;
    result_654311442 = true;
    break BeforeRet;
    }
    
    if (!(((x_654311440).length == (y_654311441).length))) {
    F.line = 331;
    result_654311442 = false;
    break BeforeRet;
    }
    
    Label1: {
      F.line = 333;
      var i_654311464 = 0;
      F.line = 75;
      F.filename = "iterators_1.nim";
      var colontmp__654311665 = 0;
      F.line = 333;
      F.filename = "comparisons.nim";
      colontmp__654311665 = subInt((x_654311440).length, 1);
      F.line = 90;
      F.filename = "iterators_1.nim";
      var res_654311667 = 0;
      Label2: {
        F.line = 91;
          Label3: while (true) {
          if (!(res_654311667 <= colontmp__654311665)) break Label3;
            F.line = 333;
            F.filename = "comparisons.nim";
            i_654311464 = res_654311667;
            if (!((x_654311440[chckIndx(i_654311464, 0, (x_654311440).length - 1)] == y_654311441[chckIndx(i_654311464, 0, (y_654311441).length - 1)]))) {
            F.line = 335;
            result_654311442 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            F.filename = "iterators_1.nim";
            res_654311667 = addInt(res_654311667, 1);
          }
      };
    };
    F.line = 337;
    F.filename = "comparisons.nim";
    result_654311442 = true;
    break BeforeRet;
  };
  framePtr = F.prev;

  return result_654311442;

}

function sysFatal_268435501(message_268435504) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    F.filename = "fatal.nim";
    raiseException({message: nimCopy(null, message_268435504, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_268435499(msg_268435500) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 36;
    F.filename = "assertions.nim";
    sysFatal_268435501(msg_268435500);
  framePtr = F.prev;

  
}

function failedAssertImpl_268435541(msg_268435542) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 41;
    F.filename = "assertions.nim";
    raiseAssert_268435499(msg_268435542);
  framePtr = F.prev;

  
}

function HEX3DHEX3D_654311496(x_654311498, y_654311499) {
  var result_654311500 = false;

  var F = {procname: "==.==", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/comparisons.nim", line: 0};
  framePtr = F;
  BeforeRet: {
    F.line = 326;
    F.filename = "comparisons.nim";
    var sameObject_654311508 = false;
    F.line = 327;
    sameObject_654311508 = x_654311498 === y_654311499
    if (sameObject_654311508) {
    F.line = 328;
    result_654311500 = true;
    break BeforeRet;
    }
    
    if (!(((x_654311498).length == (y_654311499).length))) {
    F.line = 331;
    result_654311500 = false;
    break BeforeRet;
    }
    
    Label1: {
      F.line = 333;
      var i_654311522 = 0;
      F.line = 75;
      F.filename = "iterators_1.nim";
      var colontmp__654311685 = 0;
      F.line = 333;
      F.filename = "comparisons.nim";
      colontmp__654311685 = subInt((x_654311498).length, 1);
      F.line = 90;
      F.filename = "iterators_1.nim";
      var res_654311686 = 0;
      Label2: {
        F.line = 91;
          Label3: while (true) {
          if (!(res_654311686 <= colontmp__654311685)) break Label3;
            F.line = 333;
            F.filename = "comparisons.nim";
            i_654311522 = res_654311686;
            if (!((x_654311498[chckIndx(i_654311522, 0, (x_654311498).length - 1)] == y_654311499[chckIndx(i_654311522, 0, (y_654311499).length - 1)]))) {
            F.line = 335;
            result_654311500 = false;
            break BeforeRet;
            }
            
            F.line = 93;
            F.filename = "iterators_1.nim";
            res_654311686 = addInt(res_654311686, 1);
          }
      };
    };
    F.line = 337;
    F.filename = "comparisons.nim";
    result_654311500 = true;
    break BeforeRet;
  };
  framePtr = F.prev;

  return result_654311500;

}
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
if (!(HEX3DHEX3D_654311438(new Uint8Array([97, 98, 99, 100, 101]).copyWithin(0, 3, 4), [100, 98, 99, 100, 101]))) {
F.line = 133;
F.filename = "jscore.nim";
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(9, 3) `[\'a\', \'b\', \'c\', \'d\', \'e\'].copyWithin(0, 3, 4) == @[\'d\', \'b\', \'c\', \'d\', \'e\']` "));
}

if (!(HEX3DHEX3D_654311438(new Uint8Array([97, 98, 99, 100, 101]).copyWithin(1, 3), [97, 100, 101, 100, 101]))) {
F.line = 133;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(10, 3) `[\'a\', \'b\', \'c\', \'d\', \'e\'].copyWithin(1, 3) == @[\'a\', \'d\', \'e\', \'d\', \'e\']` "));
}

if (!(HEX3DHEX3D_654311496(new Int32Array([1, 2, 3, 4, 5]).copyWithin(-2), [1, 2, 3, 1, 2]))) {
F.line = 133;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(11, 3) `[1, 2, 3, 4, 5].copyWithin(-2) == @[1, 2, 3, 1, 2]` "));
}

if (!(HEX3DHEX3D_654311496(new Int32Array([1, 2, 3, 4, 5]).copyWithin(0, 3), [4, 5, 3, 4, 5]))) {
F.line = 133;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(12, 3) `[1, 2, 3, 4, 5].copyWithin(0, 3) == @[4, 5, 3, 4, 5]` "));
}

if (!(HEX3DHEX3D_654311496(new Int32Array([1, 2, 3, 4, 5]).copyWithin(0, 3, 4), [4, 2, 3, 4, 5]))) {
F.line = 133;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(13, 3) `[1, 2, 3, 4, 5].copyWithin(0, 3, 4) == @[4, 2, 3, 4, 5]` "));
}

if (!(HEX3DHEX3D_654311496(new Int32Array([1, 2, 3, 4, 5]).copyWithin(-2, -3, -1), [1, 2, 3, 3, 4]))) {
F.line = 133;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim(14, 3) `[1, 2, 3, 4, 5].copyWithin(-2, -3, -1) == @[1, 2, 3, 3, 4]` "));
}

framePtr = F.prev;
var F = {procname: "module jscore_examples_1", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_1.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_2.nim", line: 0};
framePtr = F;
F.line = 145;
F.filename = "jscore.nim";
var arrai_721420295 = [[1, 2, 3]];
if (!((arrai_721420295[0].shift() == 1))) {
F.line = 145;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_2.nim(10, 3) `arrai.shift() == 1` "));
}

if (!(HEX3DHEX3D_654311496(arrai_721420295[0], [2, 3]))) {
F.line = 145;
failedAssertImpl_268435541(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_2.nim(11, 3) `arrai == @[2, 3]` "));
}

framePtr = F.prev;
var F = {procname: "module jscore_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group0_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group0_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;

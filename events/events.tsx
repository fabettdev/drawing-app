import EventEmitter from "events";
export const undoEvent = new EventEmitter();
export const redoEvent = new EventEmitter();
export const clearEvent = new EventEmitter();
export const pickBgEvent = new EventEmitter();
export const saveImgEvent = new EventEmitter();
export const startDrawingEvent = new EventEmitter();
export const startErasingEvent = new EventEmitter();
export const changeSizeEvent = new EventEmitter();
export const changeColorEvent = new EventEmitter();
export const takePictureEvent = new EventEmitter();

export function onControlEvents(
  clearPad: (...args: any[]) => void,
  redoPad: (...args: any[]) => void,
  undoPad: (...args: any[]) => void,
  setBgPad: (...args: any[]) => void,
  saveImg: (...args: any[]) => void,
  startDrawing: (...args: any[]) => void,
  startErasing: (...args: any[]) => void,
  changeSize: (...args: any[]) => void,
  changeColor: (...args: any[]) => void,
  takePicture: (...args: any[]) => void
) {
  clearEvent.on("onClearPad", clearPad);
  redoEvent.on("onRedoPad", redoPad);
  undoEvent.on("onUndoPad", undoPad);
  pickBgEvent.on("onPickBgPad", setBgPad);
  saveImgEvent.on("onSaveImg", saveImg);
  startDrawingEvent.on("onDrawPad", startDrawing);
  startErasingEvent.on("onErasePad", startErasing);
  changeSizeEvent.on("onChangeSize", changeSize);
  changeColorEvent.on("onChangeColor", changeColor);
  takePictureEvent.on("onTakePicture", takePicture);
}

export function offControlEvents(
  clearPad: (...args: any[]) => void,
  redoPad: (...args: any[]) => void,
  undoPad: (...args: any[]) => void,
  setBgPad: (...args: any[]) => void,
  saveImg: (...args: any[]) => void,
  startDrawing: (...args: any[]) => void,
  startErasing: (...args: any[]) => void,
  changeSize: (...args: any[]) => void,
  changeColor: (...args: any[]) => void,
  takePicture: (...args: any[]) => void
) {
  clearEvent.off("onClearPad", clearPad);
  redoEvent.off("onRedoPad", redoPad);
  undoEvent.off("onUndoPad", undoPad);
  pickBgEvent.off("onPickBgPad", setBgPad);
  saveImgEvent.off("onSaveImg", saveImg);
  startDrawingEvent.off("onDrawPad", startDrawing);
  startErasingEvent.off("onErasePad", startErasing);
  changeSizeEvent.off("onChangeSize", changeSize);
  changeColorEvent.off("onChangeColor", changeColor);
  takePictureEvent.off("onTakePicture", takePicture);
}

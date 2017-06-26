const INIT_STATE = [
  { id: 1, title : 'Apple', link : 'http://www.clearpng.com/contents/sharedthumbimages/0335f/clearPNG-Food-Fruit-Fruit-Red-Apple-946-1.png'},
  { id: 2, title : 'Strawberry', link : 'https://upload.wikimedia.org/wikipedia/commons/8/86/Strawberry_%28transparent_background%29.png'},
  { id: 3, title : 'Banana', link : 'http://pngimg.com/uploads/banana/banana_PNG825.png'},
  { id: 4, title : 'Orange', link : 'http://pngimg.com/uploads/orange/orange_PNG749.png'},
  { id: 5, title : 'Papaya', link : 'http://www.pngmart.com/files/3/Papaya-Transparent-Background.png'},
  { id: 6, title : 'Pear', link : 'http://pics.clipartpng.com/Pear_Fruit_PNG_Clipart-242.png'},

];

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

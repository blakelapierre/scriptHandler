import tagHandler from 'tagHandler';

export default function scriptHandler(type, handler) {
  tagHandler('script', {'type': {[type]: handler}});
}
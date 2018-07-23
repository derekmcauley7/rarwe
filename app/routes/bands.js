import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import { A } from '@ember/array';

let Band = EmberObject.extend({
  name : '',
});

export default Route.extend({
  model(){
    let ledZepplin = Band.create({name: 'Led Zepplin'});
    let pearJam = Band.create({name: 'Peal Jam'});
    let fooFighter =  Band.create({name: 'Foo fighters'});

    return A([ledZepplin, pearJam, fooFighter]);
  }

});

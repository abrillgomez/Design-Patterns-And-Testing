class Bird {
  fly() {
    console.log('Volando...');
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error('Los pingüinos no pueden volar.')
  }

  swim(){
    console.log('Nadando...');
  }
}

class Parrot extends Bird {
  fly() {
    console.log('El loro está volando');
  }

  eat(){
    console.log('El loro está comiendo');
  }
}

const birdFly = (bird) => {
  bird.fly()
}

const penguin = new Penguin()
const litteParrot = new Parrot()
birdFly(penguin)
birdFly(litteParrot)
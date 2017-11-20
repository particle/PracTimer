
// create a Tone class
function Tone(context,freq=440,wave="sine") {
  // console.log( freq,wave) ;
  this.context = context;
  this.status = 0;
  this.freq = freq || 440;
  this.wave = wave || 'square';
}


// tones have required properties
Tone.prototype.setup = function(){
  this.osc = context.createOscillator();
  this.osc.type = 'sine' ;
  this.osc.frequency.value = this.freq;

  this.gainNode = this.context.createGain();
  this.gainNode.gain.value = 0.25;

  this.filter = this.context.createBiquadFilter();
  // this.filter.type = "lowpass";
  // this.filter.frequency = 8000;

  this.osc.connect(this.gainNode);

  this.gainNode.connect(this.filter);
  this.filter.connect(context.destination);
}

// this is how we start a tone
Tone.prototype.start = function () {
  this.setup();
  this.osc.start(0);
  this.status = 1;
}

// this is how we stop a tone
Tone.prototype.stop = function () {
  this.osc.stop(0);
  this.status = 0;
}


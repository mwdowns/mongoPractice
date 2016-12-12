var python = {
  language: 'Python',
  inventors: [
    'Guido van Rossum'
  ],
  first_appeared: '1991',
  paradigm: [
    'object-oriented',
    'imperative',
    'functional',
    'procedural',
    'reflective'
  ],
  typing_discipline: [
    'duck',
    'dynamic',
    'strong',
    'gradual'
  ]
};

var javascript = {
  language: 'JavaScript',
  inventors: [
    'Brandon Eich'
  ],
  first_appeared: '1995',
  paradigm: [
    'scripting',
    'object-oriented',
    'imperative',
    'functional',
    'event-driven'
  ],
  typing_discipline: [
    'duck',
    'dynamic'
  ]
};

var java = {
  language: 'Java',
  inventors: [
    'James Gosling'
  ],
  first_appeared: '1995',
  paradigm: [
    'object-oriented',
    'structured',
    'imperative',
    'generic',
    'reflective',
    'concurrent',
  ],
  typing_discipline: [
    'static',
    'strong',
    'safe',
    'nominative',
    'manifest'
  ]
};

var haskell = {
  language: 'Haskell',
  inventors: [
    'Simon Peyton Jones'
  ]
};

var closure = {
  language: 'Closure',
  inventors: [
    'Rich Hickey'
  ],
  paradigm: [
    'functional'
  ],
  typing_discipline: [
    'dynamic',
    'strong'
  ]
};

var languages = [python, javascript, java, haskell, closure];

for (var i = 0; i < languages.length; i++) {
  db.languages.insert(languages[i]);
}

db.languages.find({$and: [{paradigm: 'object-oriented'}, {first_appeared : { $gt: '1989'}}, {first_appeared: {$lt: '2000'}}]}).pretty();
}

var fieldstoupdate = {
  inventors: [
    'Lennart Augustsson',
    'Dave Barton',
    'Brian Boutel',
    'Warren Burton',
    'Joseph Fasel',
    'Kevin Hammond',
    'Ralf Hinze',
    'Paul Hudak',
    'John Hughes',
    'Thomas Johnsson',
    'Mark Jones',
    'Simon Peyton Jones',
    'John Launchbury',
    'Erik Meijer',
    'John Peterson',
    'Alastair Reid',
    'Colin Runciman',
    'Philip Wadle'
  ],
  first_appeared: '1990',
  paradigm: [
    'functional',
    'imperative',
    'lazy/non-strict',
    'modular'
  ],
  typing_discipline: [
    'static',
    'strong',
    'inferred'
  ]
}

db.languages.update({langauge: 'Haskell'}, {$set: fieldstoupdate}, {upsert: true});

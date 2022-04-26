class IsValid {
  static username(text) {
    const minSize = 5;
    const maxSize = 15;
    if (typeof text !== 'string' || text === '') {
      return [true, 'Turi buti ne tuscias tekstas'];
    }
    if (text.length < minSize || text.length > maxSize) {
      return [
        true,
        `Negali buti maziau nei ${minSize} ir daugiau nei ${maxSize} simboliu`,
      ];
    }
    return [false, 'OK'];
  }

  static email(text) {
    const minSize = 6;
    const maxSize = 87;
    if (typeof text !== 'string' || text === '') {
      return [true, 'Turi buti ne tuscias tekstas'];
    }
    if (text.length < minSize || text.length > maxSize) {
      return [
        true,
        `Negali buti maziau nei ${minSize} ir daugiau nei ${maxSize} simboliu`,
      ];
    }
    if (!text.includes('@')) {
      return [true, 'Truksta @ simbolio'];
    }
    if (text[0] === '@') {
      return [true, 'Truksta dalies pries @ simboli'];
    }
    if (text[text.length - 1] === '@') {
      return [true, 'Truksta dalies uz @ simbolio'];
    }
    if (text.includes(' ')) {
      return [true, 'Tarpas yra negalimas'];
    }
    if (
      !text.includes('.') ||
      text.includes('@.') ||
      text[text.length - 1] === '.' ||
      text.substring(text.indexOf('.') + 1).length < 2
    ) {
      return [true, 'Dalis uz @ simbolio nera validi tinklalapio nuoroda'];
    }
    if (text.substring(text.indexOf('@') + 1).includes('@')) {
      return [true, 'Gali buti tik vienas @ simbolis'];
    }
    return [false, 'OK'];
  }

  static password(text) {
    const minSize = 8;
    const maxSize = 100;
    if (typeof text !== 'string' || text === '') {
      return [true, 'Turi buti ne tuscias tekstas'];
    }
    if (text.length < minSize || text.length > maxSize) {
      return [
        true,
        `Negali buti maziau nei ${minSize} ir daugiau nei ${maxSize} simboliu`,
      ];
    }
    return [false, 'OK'];
  }

  static title(text) {
    const minSize = 5;
    const maxSize = 100;

    if (typeof text !== 'string' || text === '') {
      return [true, 'Turi buti ne tuscias tekstas'];
    }
    if (text.length < minSize || text.length > maxSize) {
      return [
        true,
        `Negali buti maziau nei ${minSize} ir daugiau nei ${maxSize} simboliu`,
      ];
    }
    return [false, 'OK'];
  }

  static slug(text) {
    const minSize = 5;
    const maxSize = 100;
    const allowed =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-';

    if (typeof text !== 'string' || text === '') {
      return [true, 'Turi buti ne tuscias tekstas'];
    }

    if (text.includes(' ')) {
      return [
        true,
        `Nuoroda gali buti sudaryta tik is raidziu ir skaiciu (Tarpas nera leistinas)`,
      ];
    }

    for (const letter of text) {
      if (!allowed.includes(letter)) {
        return [
          true,
          `Nuoroda gali buti sudaryta tik is raidziu ir skaiciu ("${letter}" nera leistinas)`,
        ];
      }
    }

    if (text.length < minSize || text.length > maxSize) {
      return [
        true,
        `Negali buti maziau nei ${minSize} ir daugiau nei ${maxSize} simboliu`,
      ];
    }
    return [false, 'OK'];
  }

  static content(text) {
    const minSize = 50;
    const maxSize = 10000;

    if (typeof text !== 'string' || text === '') {
      return [true, 'Turi buti ne tuscias tekstas'];
    }
    if (text.length < minSize || text.length > maxSize) {
      return [
        true,
        `Negali buti maziau nei ${minSize} ir daugiau nei ${maxSize} simboliu`,
      ];
    }
    return [false, 'OK'];
  }
}

export { IsValid };
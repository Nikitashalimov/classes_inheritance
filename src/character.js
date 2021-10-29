export default class Character {
  constructor(name, type) {
    // имя должно быть строкой от 2 до 10 символов
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error("the character's name must contain letters from 2 to 10 characters");
    }
    // тип должен быть один из 6-ти предложенных
    if (type === 'Boweman' || type === 'Swordsman' || type === 'Magician' || type === 'Daemon' || type === 'Undead' || type === 'Zombie') {
      this.type = type;
    } else {
      throw new Error('Please select one of the available classes: Boweman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}

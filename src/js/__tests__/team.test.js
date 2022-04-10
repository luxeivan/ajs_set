import Team from '../team';

test('Team add', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const team = new Team();
    team.add(obj);
    const result = team.members;
    const tobe = new Set([
        { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40, }, // порядок взят из массива с ключами
    ]);
    expect(result).toEqual(tobe);
});

test('Team error', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const team = new Team();
    team.add(obj);
    const result = () => { team.add(obj); };
    expect(result).toThrow('Этот персонаж уже существует');
});

test('Team addAll', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const arrObj = [obj, obj, {
        name: 'лучник', health: 10, level: 2, attack: 80, defence: 40,
    }];
    const team = new Team();
    team.addAll(arrObj);
    const result = team.members;
    const tobe = new Set([
        { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 },
        { name: 'лучник', health: 10, level: 2, attack: 80, defence: 40 }
    ]);
    expect(result).toEqual(tobe);
});

test('Team toArray', () => {
    const obj = {
        name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
    };
    const arrObj = [obj, obj, {
        name: 'лучник', health: 10, level: 2, attack: 80, defence: 40,
    }];
    const team = new Team();
    team.addAll(arrObj);
    const result = team.toArray();
    const tobe = [
        { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 },
        { name: 'лучник', health: 10, level: 2, attack: 80, defence: 40 }
    ];
    expect(result).toEqual(tobe);
});
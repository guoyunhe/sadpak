import { sadpak } from '.';

describe('sadpak', () => {
  it('normal', async () => {
    expect(sadpak('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(sadpak('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});

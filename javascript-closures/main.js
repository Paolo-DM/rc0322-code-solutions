function graduate(credential) {
  return function fullName(fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(`medicalSchool('Paolo Di Martino'): ${medicalSchool('Paolo Di Martino')}`);
console.log(`lawSchool('Paolo Di Martino'): ${lawSchool('Paolo Di Martino')}`);

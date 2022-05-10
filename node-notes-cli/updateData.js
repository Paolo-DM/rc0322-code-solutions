function updateData(fs, data) {
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

module.exports = updateData;

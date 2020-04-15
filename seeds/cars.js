
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '123', make: 'Mercedes', model: 'ML', mileage: '380000', transmission_type: 'auto', title_status: 'used' },
        {VIN: '321', make: 'Hyundai', model: 'Matrix', mileage: '180000', transmission_type: 'manual', title_status: 'used' },
        {VIN: '777', make: 'Mercedes', model: 'BMW', mileage: '250000', transmission_type: 'manual', title_status: 'used' }
      ]);
    });
};

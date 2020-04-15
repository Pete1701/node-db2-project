
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {        
        tbl.increments("id").index();
        tbl.integer("VIN").index();
        tbl.decimal("make").notNullable().index();
        tbl.string("model").notNullable().index();  
        tbl.integer("mileage").notNullable().index();
        tbl.string("transmission_type").defaultTo(null);
        tbl.string("title_status").defaultTo(null);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");  
};

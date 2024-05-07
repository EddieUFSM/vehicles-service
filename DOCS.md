<a name="top"></a>
# Vehicles Service v0.0.1

Vehicles Service Documentation

# Table of contents

- [Vehicle](#Vehicle)
  - [Create a new vehicle](#Create-a-new-vehicle)
  - [Delete a vehicle](#Delete-a-vehicle)
  - [Retrieve a single vehicle](#Retrieve-a-single-vehicle)
  - [Retrieve all vehicles](#Retrieve-all-vehicles)
  - [Update a vehicle](#Update-a-vehicle)

___


# <a name='Vehicle'></a> Vehicle

## <a name='Create-a-new-vehicle'></a> Create a new vehicle
[Back to top](#top)

```
POST /vehicles
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| placa | `String` | <p>License plate of the vehicle (required)</p> |
| chassi | `String` | <p>Chassis number of the vehicle (required)</p> |
| renavam | `Number` | <p>Renavam number of the vehicle (required)</p> |
| modelo | `String` | <p>Model of the vehicle (required)</p> |
| marca | `String` | <p>Brand of the vehicle (required)</p> |
| ano | `Number` | <p>Year of the vehicle (required)</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| vehicle | `Object` | <p>Created vehicle object</p> |

## <a name='Delete-a-vehicle'></a> Delete a vehicle
[Back to top](#top)

```
DELETE /vehicles/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Vehicle's unique ID</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| message | `String` | <p>Success message</p> |

## <a name='Retrieve-a-single-vehicle'></a> Retrieve a single vehicle
[Back to top](#top)

```
GET /vehicles/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Vehicle's unique ID</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| vehicle | `Object` | <p>Vehicle details</p> |

## <a name='Retrieve-all-vehicles'></a> Retrieve all vehicles
[Back to top](#top)

```
GET /vehicles
```
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| vehicles | `Object[]` | <p>List of vehicles</p> |

## <a name='Update-a-vehicle'></a> Update a vehicle
[Back to top](#top)

```
PATCH /vehicles/:id
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Vehicle's unique ID</p> |
| placa | `String` | **optional** <p>License plate of the vehicle</p> |
| chassi | `String` | **optional** <p>Chassis number of the vehicle</p> |
| renavam | `Number` | **optional** <p>Renavam number of the vehicle</p> |
| modelo | `String` | **optional** <p>Model of the vehicle</p> |
| marca | `String` | **optional** <p>Brand of the vehicle</p> |
| ano | `Number` | **optional** <p>Year of the vehicle</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| vehicle | `Object` | <p>Updated vehicle object</p> |


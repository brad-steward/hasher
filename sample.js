/// Default size: 30x30
/// default shape: rectangle
/// if connected rooms is empty then don't render any connections

const sample = {
	"name": "Test Dungeon",
	rooms: [
		{
			id: 1,
			connectedRooms: [
				3,
				4
			],
			shape: "rectangle",
			size: {
				height: 20,
				width: 20
			}
		}, {
			id: 2,
			connectedRooms: [
				3
			]
		},
		{
			id: 3,
			connectedRooms: [
				4
			],
			shape: "circle",
			size: {
				width: 24
			}
		},
		{
			id: 4,
			shape: [45, 23, 34, 40, 45]
		}
	]
};

export default {
	sample
};

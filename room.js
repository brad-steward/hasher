export default class Room {
	id = 0;
	connectedRoomIds = [];
	shape = "rectangle";
	size = {
		height: 30,
		width: 30
	};

	connectedRooms = [];

	constructor(id, connectedRoomIds, shape, size) {
		this.id = id || this.id;
		this.connectedRoomIds = connectedRoomIds || this.connectedRoomIds;
		this.shape = shape || this.shape;
		this.size = size || this.size;
	}

	get id () {
		return this.id;
	}

	get connectedRoomIds () {
		return this.connectedRoomIds;
	}

	set connectedRooms (rooms) {
		this.connectedRooms = rooms;
	}

	addConnectedRoom (roomId) {
		this.connectedRoomIds.push(roomId);
	}


}

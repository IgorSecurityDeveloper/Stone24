package entities.enumerate;

public enum TicketPriority {
	LOW, // Something that can wait
	MEDIUM, // The user cannot do part of his job
	HIGH, // The user is unable to work
	ASAP, // Used for VIP users only
}

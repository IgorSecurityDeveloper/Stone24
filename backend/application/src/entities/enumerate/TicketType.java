package entities.enumerate;

public enum TicketType {
    INC,  // incident
	REQ,  // request
	SCTASK,  // task after generate the request, just the analyst can se it
	HT, // How To
	STC, // Status call
	INFO, // Information only
	HUP, // Hang Up call
}
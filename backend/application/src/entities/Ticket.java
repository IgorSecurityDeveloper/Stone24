package entities;

public class Ticket {

	private int TicketNumber;
	private Enum TicketType;
	private Enum Priority;
	private Enum Impact;
	private Enum ContactMethod;
	
	public int getTicketNumber() {
		return TicketNumber;
	}
	public void setTicketNumber(int ticketNumber) {
		TicketNumber = ticketNumber;
	}
	public Enum getTicketType() {
		return TicketType;
	}
	public void setTicketType(Enum ticketType) {
		TicketType = ticketType;
	}
	public Enum getPriority() {
		return Priority;
	}
	public void setPriority(Enum priority) {
		Priority = priority;
	}
	public Enum getImpact() {
		return Impact;
	}
	public void setImpact(Enum impact) {
		Impact = impact;
	}
	public Enum getContactMethod() {
		return ContactMethod;
	}
	public void setContactMethod(Enum contactMethod) {
		ContactMethod = contactMethod;
	}
	
	public Ticket(int ticketNumber, Enum ticketType, Enum priority, Enum impact, Enum contactMethod) {
		TicketNumber = ticketNumber;
		TicketType = ticketType;
		Priority = priority;
		Impact = impact;
		ContactMethod = contactMethod;
	}
	
	public void createTicket() {
		
	}
	
	public void closeTicket() {
		
	}
    
    public void cancelTicket() {
		
	}
    
    
}

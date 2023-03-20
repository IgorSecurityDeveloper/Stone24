package entities;

public class User {
 
	private int UserID;
	private String UserName;
	private int AuthCode;
	private String Address;
	private Enum Language;
	private boolean UserActive;
	public int getUserID() {
		return UserID;
	}
	public void setUserID(int userID) {
		UserID = userID;
	}
	public String getUserName() {
		return UserName;
	}
	public void setUserName(String userName) {
		UserName = userName;
	}
	public int getAuthCode() {
		return AuthCode;
	}
	public void setAuthCode(int authCode) {
		AuthCode = authCode;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public Enum getLanguage() {
		return Language;
	}
	public void setLanguage(Enum language) {
		Language = language;
	}
	public boolean isUserActive() {
		return UserActive;
	}
	public void setUserActive(boolean userActive) {
		UserActive = userActive;
	} 
	
	public User(int userID, String userName, int authCode, String address, Enum language, boolean userActive) {
		UserID = userID;
		UserName = userName;
		AuthCode = authCode;
		Address = address;
		Language = language;
		UserActive = userActive;
	}
	
	public void createTicket() {
		
	}
}

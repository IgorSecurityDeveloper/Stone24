package entities;

public class User {
 
	private int userID;
	private String userName;
	private int authCode;
	private String address;
	private Enum<languageOptions> language;
	private String password;
	private String email;
	private String role;
	private boolean userActive;
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getAuthCode() {
		return authCode;
	}
	public void setAuthCode(int authCode) {
		this.authCode = authCode;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Enum getLanguage() {
		return language;
	}
	public void setLanguage(Enum language) {
		this.language = language;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public boolean isUserActive() {
		return userActive;
	}
	public void setUserActive(boolean userActive) {
		this.userActive = userActive;
	}
	
	public void createTicket() {
		
	}
	
	public void login() {
		
	}
	
	public void logout() {
		
	}
}

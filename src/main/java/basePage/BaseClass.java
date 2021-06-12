package basePage;

import java.util.Random;

public class BaseClass {
	
	public int randomnumbergenerator(int num) {
		
		Random ran = new Random();
		int number = ran.nextInt(num);
		return number;
		
	}

}

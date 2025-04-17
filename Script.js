 ArrayUtilities {

 entered number
    public static int validateNumber(int lowerLimit, int upperLimit) {
        Scanner scanner = new Scanner(System.in);
        int number;

        do {
            System.out.print("Enter a number between " + lowerLimit + " and " + upperLimit + ": ");
            number = scanner.nextInt();
        } while (number < lowerLimit || number > upperLimit);

        return number;
    }

    search for a number in an existing array
    public static boolean searchInArray(int[] array, int size, int numberToSearch) {
        for (int i = 0; i < size; i++) {
            if (array[i] == numberToSearch) {
                return true; // Number found
            }
        }
        return false; // Number not found
    }

 fill the array with numbers
    public static void fillArray(int[] array) {
        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < array.length; i++) {
            System.out.print("Enter number " + (i + 1) + ": ");
            array[i] = scanner.nextInt();
        }
    
    print the numbers in the array
    public static void printArray(int[] array) {
        System.out.print("Array elements: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

 calculate  sum of array elements
    public static int sumArray(int[] array) {
        int sum = 0;
        for (int num : array) {
            sum += num;
        }
        return sum;
    }
}

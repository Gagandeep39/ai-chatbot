// class CustomString {

//   String val = "";



//   CustomString(String s) {
//     this.val = s;
//   }
// }


// new CustomString()

// // IFSC

// CREATE TABLE_INFO (IFSC VARCHAR() PRIMARY KEY, ACCOUNT VARCHAR(10), )
// // , branch name, region, bank, satename
// // IFSC would be foreign in Account

// c

class BinarySeacrh {
  boolean search(Integer[] items, Integer key) {
    // [1, 3, 4, 6, 22] // 1
    int left = 0;
    int right = items.length  - 1;
    while (left <= right) {
      int mid = (left + right) / 2; // 4
      if (key > items[mid]) {
        left = mid + 1;
      }
      else if (key < items[mid]) {
        right = mid - 1
      }
      else return true;
    }
    return false;
  }
}

interface EMply {
  addEmployee();
  deleteEmploye();
  defalt 
}



// Most lcasses have comparator imllemented using comparator.sort()

// BEst case scenario when the item is at 0th 

// Stack overflow is an Exeptio or Error

// TEm decsion later

// Algorithmostly
// Java features in each verison
// Sick on one language 
// Database ***
// Nameing convection ***
// 

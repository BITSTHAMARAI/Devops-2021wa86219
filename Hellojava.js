echo "public class HelloJava { public static void main(String[] args) { System.out.println(\"Version 1 - Java\"); } }" > HelloJava.java
git add HelloJava.java
git commit -m "Add HelloJava version 1"
 
# Version 2
echo "// Version 2" >> HelloJava.java
git commit -am "Update HelloJava to version 2"

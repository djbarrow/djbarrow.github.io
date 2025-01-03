#include <stdio.h> // Needed for printf

typedef struct
{
  char name[20]; // an array
  char address[20]; // an array
  int age; // a variable
} user_info_t;

int main()
{
  int i;
  user_info_t djb={"DJ Barrow","Scarra",42};
  
  printf("name=%s, sizeof name=%d, address of name=%p\n"
	 "address=%s, sizeof address=%d, address of address=%p\n"
	 "value of age=%d, sizeof age %d, address of age %p\n",
	 &djb.name,sizeof(djb.name),&djb.name,
	 &djb.address,sizeof(djb.address),&djb.address,
	 djb.age,sizeof(djb.age),&djb.age);
  // This will print the array including uninitialized garbage at the end
  for(i=0;i<sizeof(djb.name);i++)
    printf("%c\n",djb.name[i]);
}

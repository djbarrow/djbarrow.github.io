#include <stdio.h>

int main()
{
  unsigned int a,b;

  printf("enter two numbers seperated by spaces ");
  scanf("%u %u",&a,&b);
  printf("\n%u\n",(unsigned int)((unsigned char)((unsigned char)a+(unsigned char)b)));
}

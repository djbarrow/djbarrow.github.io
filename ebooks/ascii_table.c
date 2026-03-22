#include <stdio.h>

int main()
{
  int i;
  for(i=32;i<=127;i++)
    printf("%d %c\n",i,(char)i);
}

#include stdio.h
#include stdlib.h
#include string.h

#define MAX 100

typedef struct {
    char name[20];
    int age;
    char address[50];
    char phone[20];
} Person;

Person person[MAX];
int count = 0;

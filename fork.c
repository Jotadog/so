#include <stdio.h>
#include <stdlib.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
    int i;
    pid_t pid = fork();

    if (pid < 0){
        perror("fork");
        return 0;
    }
    if (pid == 0)
    {
        printf("pid do Filho: %d\n", getpid());
    }
    else
    {
        printf("pid do Pai: %d\n", getpid());
    }
    printf("Codigo executado por ambos os processos\n");
    scanf("%d", i);

    return 0;
}

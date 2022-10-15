#include "solution.h"

int main() {
  vector<int> array{1, 3};
  int n = 3;

  int res = Solution::buildArray(array, n);
  printf("____Res: %d\n", res);

  return 0;
}
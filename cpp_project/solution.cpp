#include "solution.h"

using namespace std;

class Solution {
public:
    vector<string> buildArray(vector<int>& target, int n) {
        vector<string> res;
        int flag = 1;
        for (int i = 0; i < target.size(); ++i) {
            int curr_num = target[i];
            if (curr_num != flag) {
                res.push_back("Push");
                res.push_back("Pop");
                --i;
            } else {
                res.push_back("Push");
            }
            ++flag;
        }

        return res;
    }
};
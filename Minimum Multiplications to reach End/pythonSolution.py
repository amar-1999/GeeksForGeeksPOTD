#User function Template for python3

from typing import List
from collections import deque
class Solution:
    
    def minimumMultiplications(self, arr : List[int], start : int, end : int) -> int:
        # code here
        mod = 10**5

        d = [float('inf')] * mod
        q = deque()
        q.append(start)
        d[start] = 0

        if start == end:
            return 0

        while q:
            node = q.popleft()

            for i in arr:
                child = (i * node) % mod

                if d[child] > d[node] + 1:
                    d[child] = d[node] + 1

                    if child == end:
                        return d[child]

                    q.append(child)

        return -1

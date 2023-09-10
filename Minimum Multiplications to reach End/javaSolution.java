

// User function Template for Java

class Solution {
    int minimumMultiplications(int[] arr, int start, int end) {

        // Your code here
        int n = arr.length;
        final int mod = 100000;

        int[] d = new int[mod];
        Arrays.fill(d, 1_000_000_000);
        Queue<Integer> q = new LinkedList<>();
        q.add(start);
        d[start] = 0;

        if (start == end) {
            return 0;
        }

        while (!q.isEmpty()) {
            int node = q.poll();

            for (int i : arr) {
                int child = (i * node) % mod;

                if (d[child] > d[node] + 1) {
                    d[child] = d[node] + 1;

                    if (child == end) {
                        return d[child];
                    }

                    q.add(child);
                }
            }
        }

        return -1;
    }
}
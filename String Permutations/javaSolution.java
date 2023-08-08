

//User function Template for Java


class Solution
{
    public ArrayList<String> permutation(String S)
    {
        //Your code here
        ArrayList<String> result = new ArrayList<>();
        char[] chars = S.toCharArray();
        permute(chars, 0, result);
        Collections.sort(result);
        return result;
    }
    private void permute(char[] chars, int index, ArrayList<String> result) {
        if (index == chars.length - 1) {
            result.add(new String(chars));
            return;
        }

        for (int i = index; i < chars.length; i++) {
            swap(chars, index, i);
            permute(chars, index + 1, result);
            swap(chars, index, i);
        }
    }

    private void swap(char[] chars, int i, int j) {
        char temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }
}
#!/bin/bash

# Load test cases from the file
test_cases=$(cat test_cases.txt)

# Loop through each test case
while read -r test_case; do
  # Extract input values from the test case string
  gender=$(echo $test_case | awk '{print $1}')
  height=$(echo $test_case | awk '{print $2}')
  bar_reps=$(echo $test_case | awk '{print $3}')
  bar_seconds=$(echo $test_case | awk '{print $4}')
  abs=$(echo $test_case | awk '{print $5}')
  run_3km=$(echo $test_case | awk '{print $6}')
  run_5km=$(echo $test_case | awk '{print $7}')
  swim=$(echo $test_case | awk '{print $8}')
  dive=$(echo $test_case | awk '{print $9}')
  expected_output=$(echo $test_case | awk '{print $10}')

  # Run the JavaScript code with the input values as arguments
  output=$(node script.js $gender $height $bar_reps $bar_seconds $abs $run_3km $run_5km $swim $dive)

  # Compare the output with the expected output
  if [ "$output" = "$expected_output" ]; then
    # Output result in green if the test passed
    echo -e "\033[32mPASS\033[0m: $gender $height $bar_reps $bar_seconds $abs $run_3km $run_5km $swim $dive"
  else
    # Output result in red if the test failed
    echo -e "\033[31mFAIL\033[0m: $gender $height $bar_reps $bar_seconds $abs $run_3km $run_5km $swim $dive"
  fi
done <<< "$test_cases"
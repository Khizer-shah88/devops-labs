#!/bin/bash

echo "===================="
echo "📦 SYSTEM INFORMATION"
echo "===================="

echo "Hostname: $(hostname)"
echo "User: $(whoami)"
echo "Uptime: $(uptime -p)"
echo "Disk Usage:"
df -h
echo "Memory Usage:"
free -m

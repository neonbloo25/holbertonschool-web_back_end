#!/usr/bin/env python3
"""Asyncio time"""
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return asyncio.Task for wait_random with given max_delay."""
    return asyncio.create_task(wait_random(max_delay))

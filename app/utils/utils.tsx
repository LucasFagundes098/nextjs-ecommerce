"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { useCart } from "@/app/zustand/store";
import { useToast } from "@/components/ui/use-toast";
import { fetchAllData, getProductPage } from "../firebase/firebase-config";
import { isProductEmpty, handleAddToCart } from "@/app/common/commons";
import productImage from "../images/product-image.jpg";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export {
  useState,
  useEffect,
  useSearchParams,
  Image,
  Link,
  useCart,
  useToast,
  fetchAllData,
  isProductEmpty,
  productImage,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ScrollArea,
  Alert,
  AlertDescription,
  AlertTitle,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  CalendarIcon,
  useRouter,
  Input,
  getProductPage,
  handleAddToCart,
};
